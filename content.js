function getEmailContent() {
    const selectors = [
        '.h7',
        '.a3s.aiL',
        '.gmail_quote',
        '[role="presentation"]'
    ];

    for (const selector of selectors) {
        const element = document.querySelector(selector);
        if (element) return element.innerText.trim();
    }
    return '';
}

function findComposeToolbar() {
    const selectors = ['.btC', '.aDh', '[role="toolbar"]', '.gU.Up'];
    for (const selector of selectors) {
        const toolbar = document.querySelector(selector);
        if (toolbar) return toolbar;
    }
    return null;
}

function createAIButton() {
    const button = document.createElement('div');
    button.className = 'T-I J-J5-Ji ao0 v7 T-I-atl L3 ai-reply-button';
    button.style.marginRight = '8px';
    button.innerHTML = 'AI Reply';
    button.setAttribute('role', 'button');
    button.setAttribute('data-tooltip', 'Generate AI Reply');
    return button;
}

function injectButton() {
    if (document.querySelector('.ai-reply-button')) return;

    const toolbar = findComposeToolbar();
    if (!toolbar) return;

    const button = createAIButton();

    button.addEventListener('click', async () => {
        try {
            button.innerHTML = 'Generating...';
            button.style.opacity = "0.6";
            button.style.pointerEvents = "none";

            const emailContent = getEmailContent();

            const response = await fetch('http://localhost:8080/api/email/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    emailContent,
                    tone: 'professional'
                })
            });

            if (!response.ok) throw new Error('API failed');

            const generatedReply = await response.text();
            const composeBox = document.querySelector('[role="textbox"], [g_editable="true"]');

            if (composeBox) {
                composeBox.focus();
                document.execCommand('insertText', false, generatedReply);
            }
        } catch (e) {
            // silent error
        } finally {
            button.innerHTML = 'AI Reply';
            button.style.opacity = "1";
            button.style.pointerEvents = "auto";
        }
    });

    toolbar.insertBefore(button, toolbar.firstChild);
}

const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        const addedNodes = Array.from(mutation.addedNodes);

        const found = addedNodes.some(node =>
            node.nodeType === Node.ELEMENT_NODE &&
            (
                (node.matches && node.matches('.aDh, .btC, [role="dialog"]')) ||
                (node.querySelector && node.querySelector('.aDh, .btC, [role="dialog"]'))
            )
        );

        if (found) setTimeout(injectButton, 400);
    }
});

observer.observe(document.body, { childList: true, subtree: true });

import { useState, useEffect, useRef, memo } from "react";
import FormUnavailableModal from '../../components/FormStatusModal';

export const ContactDialog = memo(({ open, onClose }) => {
    const dialogRef = useRef(null);
    const closeButtonRef = useRef(null);
    const [showUnavailableModal, setShowUnavailableModal] = useState(false);

    useEffect(() => {
        if (!open) return undefined;

        // При открытии диалога сразу показываем предупреждение, без формы
        setShowUnavailableModal(true);

        const previousFocus = document.activeElement;
        closeButtonRef.current?.focus();

        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                setShowUnavailableModal(false);
                onClose();
                return;
            }
            if (event.key !== "Tab") return;

            const focusable = dialogRef.current?.querySelectorAll(
                'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );
            if (!focusable?.length) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
            previousFocus?.focus?.();
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <>
            <FormUnavailableModal
                isOpen={showUnavailableModal}
                onClose={() => {
                    setShowUnavailableModal(false);
                    onClose();
                }}
            />
        </>
    );
});

ContactDialog.displayName = "ContactDialog";

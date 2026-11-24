
import backgroundContact from '../../../../assets/backgroundContact.webp';

export default function ContactBackground() {
    return (
        <>
            <img
                src={backgroundContact}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 z-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 z-[1] bg-slate-950/60" />

            <div className="
                absolute inset-0 z-[1]
                bg-gradient-to-br
                from-slate-950/30
                via-transparent
                to-black/50
            " />
        </>
    );
}

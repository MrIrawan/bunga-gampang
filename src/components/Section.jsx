export default function Section({ sectionId, children, classname = '' }) {
    return (
        <section id={sectionId} className="pt-32 pb-36">
            <div className={`container w-full mx-auto ${classname}`}>
                { children }
            </div>
        </section>
    );
}
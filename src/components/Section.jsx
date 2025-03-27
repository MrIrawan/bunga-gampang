export default function Section({ sectionId, children }) {
    return (
        <section id={sectionId} className="pt-32 pb-16">
            <div className="container w-full mx-auto">
                { children }
            </div>
        </section>
    );
}
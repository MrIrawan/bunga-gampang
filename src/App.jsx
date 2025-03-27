import Section from "./components/Section"

function App() {

  return (
    <>
      <main>
        <Section sectionId='home'>
          <div className="flex items-center">
              <div className="w-1/2 flex flex-col gap-3">
                <p className="text-sm font-semibold text-secondary capitalize">hitung bunga jadi lebih cepat pake bunga gampang!</p>
                <h2 className="text-3xl font-bold capitalize">
                  mulai prediksi uang dengan bunga anda untuk <span className="text-primary">masa mendatang.</span>
                </h2>
                <h3 className="text-lg font-semibold text-secondary leading-tight">kami, bunga gampang siap membantu anda dengan perhitungan yang cepat dan akurat.</h3>
                <div className="flex items-center gap-3 mt-5">
                  <a href="#">
                    <button className="px-3 py-2 bg-primary rounded-lg text-text capitalize font-medium text-sm leading-relaxed transition-colors duration-300 ease-out hover:bg-primary/90">mulai hitung</button>
                  </a>
                  <hr className="border border-black h-5"/>
                  <a href="#">
                    <button className="px-3 py-2 bg-secondary rounded-lg text-text capitalize font-medium text-sm leading-relaxed transition-colors duration-300 ease-out hover:bg-secondary/90">pilih metode perhitungan</button>
                  </a>
                </div>
              </div>
              <div className="w-1/2 bg-green-600 flex justify-end">
                <img src="https://placehold.co/500x500" alt="" className="bg-red-500"/>
              </div>
            </div>
        </Section>
      </main>
    </>
  )
}

export default App

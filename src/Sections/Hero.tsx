export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center py-12">
      <div>
        <p className="text-sky-500 font-medium"> Hi, I am</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mt-2">Noel Gens</h1>
        <p className="mt-4 text-lg text-white">Cybersecurity graduate passionate about application security and scalability in cloud environments.</p>
        <div className="mt-6 flex gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 text-white">View Projects</a>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-lg relative">
          <img
            src="Noel_Profile.webp"
            alt="Your Name"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
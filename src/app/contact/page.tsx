export default function ContactPage() {
  return (
    <>
      {/* LET'S CONNECT HERO */}
      <section className="bg-[#e8e4df] py-24 min-h-[60vh] flex items-center">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-20 items-center w-full">
          
          {/* LEFT: Text */}
          <div>
            <h1 className="text-7xl font-bold text-[#2f3b1f] mb-8 leading-tight">
              Let's Connect
            </h1>
            
            <p className="text-xl text-gray-700 mb-6">
              Starting therapy is courageous.
            </p>
            
            <p className="text-lg text-gray-600">
              Get in touch for questions, or to book a free 15-minute consultation.
            </p>
          </div>

          {/* RIGHT: Flower Images */}
          <div className="flex gap-8 items-end justify-center">
            <img 
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300&h=400&fit=crop" 
              alt="Lilac flowers"
              className="w-48 h-64 object-cover rounded-full"
            />
            <img 
              src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=300&h=350&fit=crop" 
              alt="White hydrangeas"
              className="w-40 h-52 object-cover rounded-full"
            />
          </div>

        </div>
      </section>

      {/* GREEN HIPAA NOTE BOX */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-10">
          <div className="bg-[#3d5933] text-white p-12 max-w-4xl ml-auto">
            <p className="text-lg leading-relaxed">
              <span className="font-bold">PLEASE NOTE:</span> If you opt to use a "Form Block" on your contact page this is not HIPAA-compliant. Squarespace stores data that is input into forms in the Marketing tab under Profiles. Instead, you can embed a HIPAA-compliant form, a link to your client portal, or simply put your email address.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

const About = () => {
    return (
      <div className="space-y-8">
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Our Company</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Learn about our mission, vision, and the team behind our e-commerce platform.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        <section className="py-8">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2020, our e-commerce platform started with a simple mission: to provide high-quality products
                  at affordable prices with exceptional customer service.
                </p>
                <p className="text-muted-foreground">
                  What began as a small online store has grown into a comprehensive marketplace offering thousands of
                  products across multiple categories. Our commitment to quality and customer satisfaction remains at the
                  core of everything we do.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600&text=Our+Story"
                  alt="Our company story"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
  
        <section className="py-8 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Quality", description: "We ensure all products meet our high standards" },
                { title: "Affordability", description: "Fair prices without compromising on quality" },
                { title: "Customer Service", description: "Dedicated support for all your needs" },
                { title: "Innovation", description: "Constantly improving our platform and offerings" },
                { title: "Sustainability", description: "Committed to environmentally friendly practices" },
                { title: "Community", description: "Supporting local businesses and communities" },
              ].map((value, index) => (
                <div key={index} className="rounded-lg border bg-background p-6">
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
export default About
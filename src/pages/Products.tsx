import ProductsList from "../components/products/productsList"

const Products = () => {
  return (
    <div className="space-y-8">
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Products</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Learn about our mission, vision, and the team behind our e-commerce platform.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        <section className="py-8">
          <div className="container sm:px-4 md:px-6">
            <ProductsList />
          </div>
        </section>
  
        {/* <section className="py-8 bg-muted">
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
        </section> */}
      </div>
  )
}

export default Products
import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/10 to-transparent"></div>
      
      <div className="relative z-10 min-h-[80vh] flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center px-6 py-20">
          <div className="mb-8">
            <Heading
              level="h1"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Client Webshop
              </span>
            </Heading>
            <Heading
              level="h2"
              className="text-xl md:text-2xl text-white/90 font-light mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Discover premium products with exceptional quality and service.
              Your one-stop destination for all your shopping needs.
            </Heading>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <InteractiveLink
              href="/products"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-2xl"
            >
              Shop Now
            </InteractiveLink>
            
            <InteractiveLink
              href="/collections"
              variant="secondary"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Browse Collections
            </InteractiveLink>
          </div>
          
          {/* Stats section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-white/80 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80 text-sm">Premium Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80 text-sm">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/10 to-transparent"></div>
    </div>
  )
}

export default Hero

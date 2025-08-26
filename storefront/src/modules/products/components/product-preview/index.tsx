import { Text } from "@medusajs/ui"

import { getProductPrice } from "@lib/util/get-product-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { getProductsById } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const [pricedProduct] = await getProductsById({
    ids: [product.id!],
    regionId: region.id,
  })

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
  })

  return (
    <LocalizedClientLink 
      href={`/products/${product.handle}`} 
      className="group block transform transition-all duration-300 hover:scale-105"
    >
      <div 
        data-testid="product-wrapper"
        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
      >
        <Thumbnail
          thumbnail={product.thumbnail}
          images={product.images}
          size="full"
          isFeatured={isFeatured}
        />
        
        <div className="p-4">
          <Text 
            className="text-gray-800 font-semibold text-sm md:text-base mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200" 
            data-testid="product-title"
          >
            {product.title}
          </Text>
          
          <div className="flex items-center justify-between">
            {cheapestPrice && (
              <div className="flex items-center gap-x-2">
                <PreviewPrice price={cheapestPrice} />
              </div>
            )}
            
            {/* Quick add to cart button */}
            <button 
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-200 transform scale-90 group-hover:scale-100"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                // Add to cart functionality would go here
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
import ProductCarousel from "../../components/product-carousel/product-carousel";
import axios from "axios";

export async function getServerSideProps(context) {
  console.log(context)

  const id = context.params.id;
  const response = await axios.get(
    "https://api.johnlewis.com/mobile-apps/api/v1/products/" + id
  );
//   const data = await response.json();
const data = response.data
console.log(id)
  return {
    props: { data },
  };
}



const ProductDetail = ({ data }) => {
  return (
    <div>
      <h1><div dangerouslySetInnerHTML={{ __html: data.title }} /></h1>
      <div>

  //       <ProductCarousel image={data.media.images.urls[0]} />



  //       <h3>
  //         <h1>{data.price.now}</h1>
  //         <div>{data.displaySpecialOffer}</div>
  //         <div>{data.additionalServices.includedServices}</div>
  //       </h3>

  //       <div>
  //         <h3>Product information</h3>
  //       </div>
  //       <h3>Product specification</h3>
  //       <ul>
  //         {data.details.features[0].attributes.map((item) => (
            <li>
              <div><div dangerouslySetInnerHTML={{ __html: item.name }} /></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;

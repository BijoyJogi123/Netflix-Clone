import { loadStripe } from '@stripe/stripe-js';
import { QuerySnapshot } from 'firebase/firestore';
import React from 'react'
import { Link, redirect } from 'react-router-dom';
// import db from '../firebase'
import './PlanScreen.css'
function PlanScreeen() {

    // const basicPlane_id = "prod_NtOryUM2J2wmxt" 
    // const standardPlan_id = "prod_NtOrzc61eTcWF1"
    // const premiumPlan_id = "prod_NtOsiPwyBVVSdj"

     const basicPlane_id = "BASIC" 
    const standardPlan_id = "STANDARD"
    const premiumPlan_id = "PRIMEUM"

    const loadCheckout = async (priceId)=>{

          console.log("yea for fuck",priceId)

           

    }

    // const [product ,setProducts] = useState([]);

    //     useEffect(() => {

    //         db.collections("products").where('active','==',true)
    //         .get().then(QuerySnapshot=>{
    //                   const products = {} ; 
    //                   QuerySnapshot.forEach(async productDoc => {
    //                         products[[productDoc.id]] = productDoc.date();
    //                         const proceSnap = await productDoc.ref.collection("prices").get();
    //                         proceSnap.docs.forEach(doc=>{
    //                             products[productDoc.id].prices = {
    //                                 priceId:doc.id,
    //                                 priceData:doc.price.data(),
    //                             }
    //                         })
    //                   });

    //                   setProducts(products);
    //         });

    //         }, [])

    return (



        <div className='planScreen'>

            {/* It will work when you connect stripe with firebase stripe payment extention for payment , */}

            {/* {Object.entries(product).map(([productId,productData])=>{

                    return (

                        <div className='planScreen_plan'>
                            <div className='planeScreen_info'>
                                    <h5>{productData.name}</h5>
                                    <h5>{productData.description}</h5>
                            </div>

                                <button>Susbcribe</button>

                        </div>
                    )

            })} */}



            <div className='planScreen_plan'>
                <div className='planeScreen_info'>
                    <h5>Basic plan</h5>
                    <h5>480p,quality-860</h5>

              
                </div>
                <Link className='boom_link' to="https://buy.stripe.com/test_bIY8zA52U2W42pG3cc">
                <button onClick={()=>loadCheckout(basicPlane_id)} >Susbcribe</button>
                </Link>
            </div>

            <div className='planScreen_plan'>
                <div className='planeScreen_info'>
                

                    <h5>Standard plan</h5>
                    <h5>720p, quality-1080</h5>

                </div>

                <Link className='boom_link' to="https://buy.stripe.com/test_8wM2bcbrifIQaWc001">
                
                <button  onClick={()=>loadCheckout(standardPlan_id)}>Susbcribe</button>
                </Link>

            </div>


            <div className='planScreen_plan'>
                <div className='planeScreen_info'>
                  

                    <h5>Premium plan</h5>
                    <h5>4k,6k quality-8k</h5>
                </div>

                <Link className='boom_link' to="https://buy.stripe.com/test_aEUaHI8f69ks6FW3ce">
                
                <button  onClick={()=>loadCheckout(premiumPlan_id)}>Susbcribe</button>
                
                </Link>
                

            </div>

        </div>



    )
}

export default PlanScreeen
'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Lock } from 'lucide-react';
import { useCart } from '../context/cart-context';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { formatCurrency } from '../utils/utils';
import EmptyCart from '../merchandise/components/empty-cart/empty-cart';
import NavBar from '../components/navbar/navbar';

export default function Checkout() {
  const router = useRouter();
  const { items, totalPrice,subTotal,taxAmount } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    region:'',
    // postalCode: '',
    // country: '',
    phone: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
        }));
    };
    const handleSelectChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
    
      setFormData((prev) => ({
        ...prev,
        region: value,
      }));
    };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const customer = {
        name: formData.firstName + ' ' + formData.lastName,
        email: formData.email,
        phoneNumber: formData.phone || null,
        address:{
            street: formData.street,
            city: formData.city,
            region: formData.region,
            // postalCode: formData.postalCode,
            // country: formData.country,
        }
    };
    const order = {
        customer,
        items,
        totalAmount:totalPrice,
        subTotal,
        taxAmount
    }
    setIsProcessing(true);
    try{
        const response = await axios.post("/api/order",order);
        const {success,paymentLink,transactionId} = response.data;
        if(success) window.location.href = paymentLink;
    }catch(error){

    }finally{
        setIsProcessing(false);
    }
  };
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <div className="text-center">
         <EmptyCart />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <div className="max-w-6xl mt-14 md:mt-24 mx-auto px-6 py-8">
        {/* Header */}
        <button
          onClick={() => router.push('/merchandise')}
          className="flex items-center gap-2 text-[#a6a6a6] hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
          Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl text-white font-bold mb-8">Checkout</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact */}
              <div>
                <h2 className="text-lg font-medium mb-4 text-white">Contact Information</h2>
                <div className="space-y-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </div>
              </div>

              {/* Shipping */}
              <div>
                <h2 className="text-lg font-medium mb-4 text-white">Shipping Address</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="input-field"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="input-field"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="input-field"
                    />
                    <input
                    type="text"
                    name="street"
                    placeholder="Street"
                    required
                    value={formData.street}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                    {/* <input
                      type="text"
                      name="postalCode"
                      placeholder="Digital Address"
                      required
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="input-field"
                    /> */}
                  </div>
                  {/* <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    className="input-field"
                  /> */}
                </div>
               
              </div>
              <select
                name="region"
                required
                value={formData.region}
                onChange={handleSelectChange}
                className="input-field"
              >
                <option value="" disabled>Select Region</option>
                <option value="Ahafo">Ahafo</option>
                <option value="Ashanti">Ashanti</option>
                <option value="Bono">Bono</option>
                <option value="Bono East">Bono East</option>
                <option value="Central">Central</option>
                <option value="Eastern">Eastern</option>
                <option value="Greater Accra">Greater Accra</option>
                <option value="North East">North East</option>
                <option value="Northern">Northern</option>
                <option value="Oti">Oti</option>
                <option value="Savannah">Savannah</option>
                <option value="Upper East">Upper East</option>
                <option value="Upper West">Upper West</option>
                <option value="Volta">Volta</option>
                <option value="Western">Western</option>
                <option value="Western North">Western North</option>
              </select>
              {/* Payment */}
              {/* <div>
                <h2 className="text-lg font-medium mb-4">Payment</h2>
                <div className="p-4 bg-[#121212] rounded-lg border border-[#333333]">
                  <div className="flex items-center gap-2 text-[#a6a6a6] text-sm mb-4">
                    <Lock className="w-4 h-4" />
                    Secure payment powered by Paystack
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#1f1f1f] rounded-md">
                    <CreditCard className="w-5 h-5 text-[#a6a6a6]" />
                    <span className="text-sm">Card ending in ****</span>
                  </div>
                </div>
              </div> */}

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 bg-white rounded-md text-lg font-medium disabled:opacity-50"
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                    />
                    Processing...
                  </span>
                ) : (
                    <span>Pay {formatCurrency(subTotal,"GHS")}</span>
                )}
              </button>
            </form>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:pl-12 lg:border-l border-[#333333]"
          >
            <h2 className="text-lg font-medium text-white mb-6">Order Summary</h2>
            
            <div className="space-y-4">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-4">
                  <div className="w-20 h-20 bg[#121212] rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.imageUrls[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-medium text-white">{item.product.name}</h3>
                    {item.size && (
                      <p className="text-sm text-[#a6a6a6]">Size: {item.size}</p>
                    )}
                    <p className="text-sm text-[#a6a6a6]">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium text-white">
                    {formatCurrency((item.product.price * item.quantity),"GHS")}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border[#333333] space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#a6a6a6]">Subtotal</span>
                <span className="text-white">{formatCurrency(subTotal,"GHS")}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#a6a6a6]">Shipping</span>
                <span className="text-[#929292]">N/A</span>
              </div>
              <div className="flex justify-between text-white text-lg font-bold pt-4 border-t border-[#333333]">
                <span>Total</span>
                <span>{formatCurrency(subTotal,"GHS")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

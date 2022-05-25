import React from 'react';

const PurchaseModal = ({ part, setPart }) => {
    const { _id, name, available, minOrder, price } = part;

    const handleOrder = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        console.log(_id, name, quantity);
        setPart(null);
    }
    return (
        <div>
            <input type="checkbox" id="purchaseModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="purchaseModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Order placed for: {name}</h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Your Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='city' placeholder="Your City" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='address' placeholder="Your Address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='post' placeholder="Your Post Code" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" className="btn w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;
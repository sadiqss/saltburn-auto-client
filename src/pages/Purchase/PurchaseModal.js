import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const PurchaseModal = ({ part, setPart }) => {
    const { _id, name, minOrder, available } = part;
    const [user, loading, error] = useAuthState(auth);

    const handleOrder = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const order = {
            partId: _id,
            part: name,
            quantity: quantity,
            buyer: user.email,
            buyerName: user.displayName,
            phone: event.target.phone.value,
            address: event.target.address.value,
            city: event.target.city.value,
            postCode: event.target.post.value
        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast('Your Order is Placed');
                }
                setPart(null);
            })

    }
    return (
        <div>
            <input type="checkbox" id="purchaseModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="purchaseModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Order placed for: {name}</h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="number" required min={minOrder} max={available} name='quantity' placeholder="Quantity" className="input input-bordered w-full max-w-xs"
                        />
                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
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
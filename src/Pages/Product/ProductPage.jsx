import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { PRODUCTS } from '../../data/product';

export default function ProductPage() {
    const { id } = useParams();  // دریافت آیدی از URL
    const hasProduct = PRODUCTS.some((p) => p.id === id);  // مقایسه آیدی‌ها

    return (
        <>
            {!hasProduct ? (
                <>
                    <h1>404 - Product Not Found</h1>
                    <Navigate to='/' replace={true} />
                </>
            ) : (
                <div className='proShow' style={{ display: 'flex', flexDirection: 'column' }}>
                    {PRODUCTS.map((p) => {
                        if (p.id === id) {
                            return (
                                <div key={p.id}>
                                    <h1 style={{ margin: '.2em auto' }}>{p.productName}</h1>
                                    <img src={p.productImage} alt={p.productName} width={400} style={{ margin: 'auto' }} />
                                </div>
                            );
                        }
                        return null;  // در صورتی که محصول پیدا نشد، هیچ چیزی نمایش داده نشود
                    })}
                </div>
            )}
        </>
    );
}

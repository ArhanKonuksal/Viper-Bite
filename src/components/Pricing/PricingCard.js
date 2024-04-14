import "./PricingCard.css"
import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div class="card">
                <h3>Sosyal Medya Paketi</h3>
                <span className="bar"></span>
                <p className="btc">100$</p>
                <p>-Sosyal Medya Yönetimi-</p>
                <p>-Logo tasarımı-</p>
                <p>-Post/Hikaye paylaşımı-</p>
                <p>-Paralı Reklamlar-</p>
                <Link to="/iletişim" className="button">
                    Daha Fazla Bİlgİ
                </Link>
            </div>

            <div class="card">
                <h3>Web-Sitesi Paketi</h3>
                <span className="bar"></span>
                <p className="btc">250$</p>
                <p>-Hızlı ve Etkili Web Sitesi Çözümleri-</p>
                <p>-Özelleştirilmiş Web Sitesi-</p>
                <p>-Öne Çıkan Tasarım ve Fonksiyonlar-</p>
                <p>-Her Cihazda Mükemmel Görüntü-</p>
                <Link to="/iletişim" className="button">
                Daha Fazla Bİlgİ
                </Link>
            </div>

            <div class="card">
                <h3>Full Paket</h3>
                <span className="bar"></span>
                <p className="btc">300$</p>
                <p>-50$ indirim-</p>
                <p>-Sizin için çalışan bir ekip-</p>
                <p>-Markanızı dijitalde öne çıkarma-</p>
                <p>-Dijital bir gelecek-</p>
                <Link to="/iletişim" className="button">
                Daha Fazla Bİlgİ
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard
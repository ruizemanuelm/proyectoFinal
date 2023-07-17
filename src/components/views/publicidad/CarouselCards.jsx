import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselCards = () => {

    const initialCards = [
        // ... (mismos datos que en el ejemplo anterior)
        {
            id: 1,
            title: 'Zoetis',
            content: 'Marca Zoetis',
            image: 'https://nanolog.vtexassets.com/assets/vtex.file-manager-graphql/images/7c6e8462-2373-4eca-b7ca-624a45c749ba___0bb6f0ff408a0522064f10d7256450e8.jpg',
          },
          {
            id: 2,
            title: 'Purina',
            content: 'Marca Purina',
            image: 'https://nanolog.vtexassets.com/arquivos/brand2.png',
          },
          {
            id: 3,
            title: 'NexGard',
            content: 'Marca NexGard',
            image: 'https://nanolog.vtexassets.com/arquivos/brand4.png',
          },
          {
            id: 4,
            title: 'BraVecto',
            content: 'Marca BraVecto',
            image: 'https://nanolog.vtexassets.com/arquivos/brand5.png',
          },
          {
            id: 5,
            title: 'Simparica',
            content: 'Marca Simparica',
            image: 'https://nanolog.vtexassets.com/assets/vtex.file-manager-graphql/images/cfe84e0f-0b50-4d1f-8d43-34f642dfb9ae___1ed3ce7d50b61b93f2ea4f058f4ce702.jpg',
          },
          {
            id: 6,
            title: 'DogPro',
            content: 'Marca DogPro',
            image: 'https://www.dogpro.com.au/wp-content/plugins/phastpress/phast.php?service=images&src=https%3A%2F%2Fwww.dogpro.com.au%2Fwp-content%2Fuploads%2F2021%2F10%2Fdogproplus-logo-e1634268402154.png&cacheMarker=1639362015-10659&token=0f6a2f47c042d1cc',
          },
          {
            id: 7,
            title: 'Ultima',
            content: 'Marca Ultima',
            image: 'https://cdn-ukwest.onetrust.com/logos/4077548d-d478-4391-97bc-3d12cb830af3/d918703f-6333-407a-977c-e864acfa33f2/9cf248e6-9319-4cc9-b12e-e3f9e0ce1e20/LOGO_ULTIMA_PERRO_SIMULACION_DORADO_RGB.png',
          }
        ];

        const [cards, setCards] = useState(initialCards);


  return (
    <Container className="mt-5 mb-5">
      <h5>Marcas con las que trabajamos</h5>
      <div className="mt-5" style={{ overflowX: "hidden" }}>
        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id}>
              <Card className="cards-disenio border-0">
                <Card.Body className="justify-content-center">
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      height: "80px",
                      width: "170px",
                      objectFit: "cover",
                    }}
                  />
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default CarouselCards;

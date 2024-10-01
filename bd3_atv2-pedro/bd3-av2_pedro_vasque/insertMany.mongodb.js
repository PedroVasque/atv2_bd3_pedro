/* NOME DO BANCO DE DADOS */
const database = "bd3_atv2_pedro";

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = "bd3_atv2_produtos";

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use(database);

/*INSERE UM REGISTRO NA COLEÇÃO DE DADOS: */
db[collection].insertMany(
    [
        {
            "nome": "iPhone 14",
            "valor": 999.99,
            "quantidade_em_estoque": 50,
            "fabricante": "Apple",
            "categoria": "Celulares",
            "descrição": "Smartphone com câmera de alta qualidade."
        },
        {
            "nome": "Samsung Galaxy S23",
            "valor": 899.99,
            "quantidade_em_estoque": 30,
            "fabricante": "Samsung",
            "categoria": "Celulares",
            "descrição": "Celular com tela AMOLED e ótima performance."
        },
        {
            "nome": "Google Pixel 7",
            "valor": 699.99,
            "quantidade_em_estoque": 40,
            "fabricante": "Google",
            "categoria": "Celulares",
            "descrição": "Celular com câmera inteligente e recursos avançados."
        },
        {
            "nome": "OnePlus 11",
            "valor": 749.99,
            "quantidade_em_estoque": 25,
            "fabricante": "OnePlus",
            "categoria": "Celulares",
            "descrição": "Smartphone rápido com ótima duração de bateria."
        },
        {
            "nome": "Xiaomi Redmi Note 11",
            "valor": 299.99,
            "quantidade_em_estoque": 100,
            "fabricante": "Xiaomi",
            "categoria": "Celulares",
            "descrição": "Celular acessível com boa performance."
        },
        {
            "nome": "Samsung Galaxy A53",
            "valor": 349.99,
            "quantidade_em_estoque": 60,
            "fabricante": "Samsung",
            "categoria": "Celulares",
            "descrição": "Smartphone com câmera quádrupla."
        },
        {
            "nome": "Motorola Moto G Power",
            "valor": 249.99,
            "quantidade_em_estoque": 75,
            "fabricante": "Motorola",
            "categoria": "Celulares",
            "descrição": "Celular com excelente bateria."
        },
        {
            "nome": "Sony WH-1000XM4",
            "valor": 349.99,
            "quantidade_em_estoque": 20,
            "fabricante": "Sony",
            "categoria": "Fones de Ouvido",
            "descrição": "Fones com cancelamento de ruído."
        },
        {
            "nome": "Apple AirPods Pro",
            "valor": 249.99,
            "quantidade_em_estoque": 45,
            "fabricante": "Apple",
            "categoria": "Fones de Ouvido",
            "descrição": "Fones sem fio com som de alta qualidade."
        },
        {
            "nome": "Samsung Galaxy Buds 2",
            "valor": 149.99,
            "quantidade_em_estoque": 80,
            "fabricante": "Samsung",
            "categoria": "Fones de Ouvido",
            "descrição": "Fones sem fio com conforto e boa qualidade sonora."
        },
        {
            "nome": "Apple MacBook Air M2",
            "valor": 1249.99,
            "quantidade_em_estoque": 35,
            "fabricante": "Apple",
            "categoria": "Laptops",
            "descrição": "Laptop leve e potente com chip M2."
        },
        {
            "nome": "Dell XPS 13",
            "valor": 1299.99,
            "quantidade_em_estoque": 20,
            "fabricante": "Dell",
            "categoria": "Laptops",
            "descrição": "Laptop premium com design elegante."
        },
        {
            "nome": "Lenovo ThinkPad X1 Carbon",
            "valor": 1499.99,
            "quantidade_em_estoque": 15,
            "fabricante": "Lenovo",
            "categoria": "Laptops",
            "descrição": "Laptop para negócios com excelente teclado."
        },
        {
            "nome": "Asus ROG Zephyrus G14",
            "valor": 1799.99,
            "quantidade_em_estoque": 10,
            "fabricante": "Asus",
            "categoria": "Laptops",
            "descrição": "Laptop gamer potente e compacto."
        },
        {
            "nome": "HP Spectre x360",
            "valor": 1399.99,
            "quantidade_em_estoque": 12,
            "fabricante": "HP",
            "categoria": "Laptops",
            "descrição": "Laptop conversível com tela sensível ao toque."
        },
        {
            "nome": "Apple iPad Air",
            "valor": 599.99,
            "quantidade_em_estoque": 40,
            "fabricante": "Apple",
            "categoria": "Tablets",
            "descrição": "Tablet leve com desempenho impressionante."
        },
        {
            "nome": "Samsung Galaxy Tab S8",
            "valor": 649.99,
            "quantidade_em_estoque": 25,
            "fabricante": "Samsung",
            "categoria": "Tablets",
            "descrição": "Tablet com tela AMOLED e S Pen incluída."
        },
        {
            "nome": "Microsoft Surface Pro 9",
            "valor": 999.99,
            "quantidade_em_estoque": 15,
            "fabricante": "Microsoft",
            "categoria": "Tablets",
            "descrição": "Tablet híbrido com desempenho de laptop."
        },
        {
            "nome": "Amazon Fire HD 10",
            "valor": 149.99,
            "quantidade_em_estoque": 100,
            "fabricante": "Amazon",
            "categoria": "Tablets",
            "descrição": "Tablet acessível com boa autonomia."
        },
        {
            "nome": "Fitbit Charge 5",
            "valor": 149.99,
            "quantidade_em_estoque": 60,
            "fabricante": "Fitbit",
            "categoria": "Wearables",
            "descrição": "Relógio inteligente com rastreamento de saúde."
        },
        {
            "nome": "Apple Watch Series 8",
            "valor": 399.99,
            "quantidade_em_estoque": 30,
            "fabricante": "Apple",
            "categoria": "Wearables",
            "descrição": "Relógio inteligente com recursos avançados."
        },
        {
            "nome": "Samsung Galaxy Watch 5",
            "valor": 299.99,
            "quantidade_em_estoque": 40,
            "fabricante": "Samsung",
            "categoria": "Wearables",
            "descrição": "Relógio inteligente com monitoramento de saúde."
        },
        {
            "nome": "Sony PlayStation 5",
            "valor": 499.99,
            "quantidade_em_estoque": 20,
            "fabricante": "Sony",
            "categoria": "Games",
            "descrição": "Console de jogos de última geração."
        },
        {
            "nome": "Microsoft Xbox Series X",
            "valor": 499.99,
            "quantidade_em_estoque": 15,
            "fabricante": "Microsoft",
            "categoria": "Games",
            "descrição": "Console potente com gráficos impressionantes."
        },
        {
            "nome": "Nintendo Switch",
            "valor": 299.99,
            "quantidade_em_estoque": 25,
            "fabricante": "Nintendo",
            "categoria": "Games",
            "descrição": "Console versátil para jogar em casa ou em movimento."
        },
        {
            "nome": "Oculus Quest 2",
            "valor": 299.99,
            "quantidade_em_estoque": 30,
            "fabricante": "Meta",
            "categoria": "VR",
            "descrição": "Óculos de realidade virtual com jogos imersivos."
        },
        {
            "nome": "GoPro HERO10",
            "valor": 499.99,
            "quantidade_em_estoque": 20,
            "fabricante": "GoPro",
            "categoria": "Câmeras",
            "descrição": "Câmera de ação com gravação em 5.3K."
        },
        {
            "nome": "Canon EOS R50",
            "valor": 899.99,
            "quantidade_em_estoque": 10,
            "fabricante": "Canon",
            "categoria": "Câmeras",
            "descrição": "Câmera mirrorless para fotografia profissional."
        },
        {
            "nome": "Nikon D3500",
            "valor": 499.99,
            "quantidade_em_estoque": 15,
            "fabricante": "Nikon",
            "categoria": "Câmeras",
            "descrição": "Câmera DSLR ideal para iniciantes."
        },
        {
            "nome": "Apple AirTag",
            "valor": 29.99,
            "quantidade_em_estoque": 200,
            "fabricante": "Apple",
            "categoria": "Acessórios",
            "descrição": "Localizador de objetos com tecnologia Bluetooth."
        },
        {
            "nome": "Amazon Echo Dot",
            "valor": 49.99,
            "quantidade_em_estoque": 100,
            "fabricante": "Amazon",
            "categoria": "Smart Home",
            "descrição": "Assistente virtual com Alexa integrada."
        },
        {
            "nome": "Philips Hue White and Color",
            "valor": 199.99,
            "quantidade_em_estoque": 30,
            "fabricante": "Philips",
            "categoria": "Smart Home",
            "descrição": "Luz inteligente com controle de cores."
        },
        {
            "nome": "Ring Video Doorbell",
            "valor": 99.99,
            "quantidade_em_estoque": 50,
            "fabricante": "Ring",
            "categoria": "Smart Home",
            "descrição": "Campainha com vídeo e controle remoto."
        },
        {
            "nome": "Nest Learning Thermostat",
            "valor": 249.99,
            "quantidade_em_estoque": 20,
            "fabricante": "Google",
            "categoria": "Smart Home",
            "descrição": "Termostato inteligente que aprende suas preferências."
        },
        {
            "nome": "Sony A7 IV",
            "valor": 2499.99,
            "quantidade_em_estoque": 15,
            "fabricante": "Sony",
            "categoria": "Câmeras",
            "descrição": "Câmera mirrorless full-frame profissional."
        },
        {
            "nome": "GoPro HERO9",
            "valor": 399.99,
            "quantidade_em_estoque": 25,
            "fabricante": "GoPro",
            "categoria": "Câmeras",
            "descrição": "Câmera de ação resistente à água."
        },
        {
            "nome": "DJI Mini 2",
            "valor": 449.99,
            "quantidade_em_estoque": 10,
            "fabricante": "DJI",
            "categoria": "Drones",
            "descrição": "Drone compacto com câmera 4K."
        },
        {
            "nome": "Raspberry Pi 4",
            "valor": 55.00,
            "quantidade_em_estoque": 70,
            "fabricante": "Raspberry Pi",
            "categoria": "Computação",
            "descrição": "Computador de placa única para projetos DIY."
        },
        {
            "nome": "Intel Core i9-12900K",
            "valor": 589.99,
            "quantidade_em_estoque": 10,
            "fabricante": "Intel",
            "categoria": "Componentes",
            "descrição": "Processador de alto desempenho para gamers."
        },
        {
            "nome": "NVIDIA GeForce RTX 3080",
            "valor": 699.99,
            "quantidade_em_estoque": 5,
            "fabricante": "NVIDIA",
            "categoria": "Componentes",
            "descrição": "Placa de vídeo para jogos em 4K."
        },
        {
            "nome": "Corsair Vengeance LPX 16GB",
            "valor": 79.99,
            "quantidade_em_estoque": 50,
            "fabricante": "Corsair",
            "categoria": "Componentes",
            "descrição": "Memória RAM de alta performance."
        },
        {
            "nome": "Samsung 970 EVO Plus 1TB",
            "valor": 129.99,
            "quantidade_em_estoque": 40,
            "fabricante": "Samsung",
            "categoria": "Armazenamento",
            "descrição": "SSD NVMe de alta velocidade."
        },
        {
            "nome": "Western Digital My Passport 2TB",
            "valor": 79.99,
            "quantidade_em_estoque": 60,
            "fabricante": "WD",
            "categoria": "Armazenamento",
            "descrição": "HD externo portátil."
        },
        {
            "nome": "Bose QuietComfort 35 II",
            "valor": 299.99,
            "quantidade_em_estoque": 15,
            "fabricante": "Bose",
            "categoria": "Fones de Ouvido",
            "descrição": "Fones com cancelamento de ruído ativo."
        },
        {
            "nome": "Anker Soundcore Life P3",
            "valor": 89.99,
            "quantidade_em_estoque": 40,
            "fabricante": "Anker",
            "categoria": "Fones de Ouvido",
            "descrição": "Fones sem fio com som imersivo."
        },
        {
            "nome": "BenQ PD3220U",
            "valor": 1099.99,
            "quantidade_em_estoque": 10,
            "fabricante": "BenQ",
            "categoria": "Monitores",
            "descrição": "Monitor 4K para designers."
        },
        {
            "nome": "LG UltraGear 27GN950",
            "valor": 799.99,
            "quantidade_em_estoque": 12,
            "fabricante": "LG",
            "categoria": "Monitores",
            "descrição": "Monitor gamer 4K com taxa de atualização de 144Hz."
        },
        {
            "nome": "HyperX Alloy FPS Pro",
            "valor": 99.99,
            "quantidade_em_estoque": 30,
            "fabricante": "HyperX",
            "categoria": "Acessórios",
            "descrição": "Teclado mecânico compacto para gamers."
        },
        {
            "nome": "Logitech C920 HD Pro",
            "valor": 69.99,
            "quantidade_em_estoque": 25,
            "fabricante": "Logitech",
            "categoria": "Câmeras",
            "descrição": "Webcam HD para streaming e videoconferência."
        },
        {
            "nome": "Razer Kraken X",
            "valor": 49.99,
            "quantidade_em_estoque": 50,
            "fabricante": "Razer",
            "categoria": "Fones de Ouvido",
            "descrição": "Fones leves e confortáveis para jogos."
        },
        {
            "nome": "Corsair K95 RGB Platinum",
            "valor": 199.99,
            "quantidade_em_estoque": 20,
            "fabricante": "Corsair",
            "categoria": "Acessórios",
            "descrição": "Teclado mecânico com iluminação RGB."
        }
    ]
    

)      
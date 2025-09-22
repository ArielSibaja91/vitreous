import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Seeding....')
    try {
        await prisma.product.deleteMany();
        console.log('Deleted existing product data.');

        const product1 = await prisma.product.create({
            data: {
                name: 'Smartwatch Vercel',
                description: 'Un reloj inteligente con todas las funciones de un teléfono.',
                price: 299.99,
                imageUrl: 'https://images.unsplash.com/photo-1549495146-511746f364e7'
            },
        });

        const product2 = await prisma.product.create({
            data: {
                name: 'Audífonos Bluetooth Neon',
                description: 'Audífonos inalámbricos de alta calidad y cancelación de ruido.',
                price: 150.50,
                imageUrl: 'https://images.unsplash.com/photo-1582236371198-e71a473d09a0'
            },
        });
        console.log(`Created product with id: ${product1.id}`);
        console.log(`Created product with id: ${product2.id}`);
        console.log('Seeding finished.');
    } catch (e) {
        console.error('An error occurred during seeding:', e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
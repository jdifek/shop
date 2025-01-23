export interface Product {
	id: number
	name: string
	description: string
	price: number
	popularity: number
	image: string
	category: string
	type: string
}

export const mockProducts: Product[] = Array.from({ length: 50 }, (_, i) => ({
	id: i + 1,
	name: `Product ${i + 1}`,
	description: `This is a description of product ${
		i + 1
	}. Perfect for both personal and professional use.`,
	price: parseFloat((Math.random() * 500).toFixed(2)),
	popularity: Math.floor(Math.random() * 100),
	image: '/watch.jpg',
	category: i % 3 === 0 ? 'Electronics' : i % 3 === 1 ? 'Books' : 'Software',
	type: i % 2 === 0 ? 'Physical' : 'Digital',
}))

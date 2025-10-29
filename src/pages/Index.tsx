import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: 1,
      name: 'Диван Скандинавия',
      price: '89 990 ₽',
      category: 'Диваны',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Кресло Комфорт',
      price: '34 990 ₽',
      category: 'Кресла',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Стол обеденный Модерн',
      price: '54 990 ₽',
      category: 'Столы',
      image: '/placeholder.svg'
    },
    {
      id: 4,
      name: 'Шкаф-купе Лофт',
      price: '124 990 ₽',
      category: 'Шкафы',
      image: '/placeholder.svg'
    },
    {
      id: 5,
      name: 'Кровать Классик',
      price: '69 990 ₽',
      category: 'Кровати',
      image: '/placeholder.svg'
    },
    {
      id: 6,
      name: 'Комод Минимал',
      price: '29 990 ₽',
      category: 'Комоды',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <nav className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-12">
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Главная
              </button>
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Каталог
              </button>
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                О нас
              </button>
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Доставка
              </button>
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
            <button className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              <Icon name="ShoppingCart" size={20} />
              Корзина
            </button>
          </nav>
        </div>
      </header>

      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <div className="w-64 h-64 mb-12 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Icon name="Image" size={48} className="mx-auto mb-3 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Место для логотипа</p>
              </div>
            </div>

            <div className="w-full max-w-3xl">
              <div className="relative flex items-center bg-white rounded-lg shadow-sm border border-border overflow-hidden">
                <Button 
                  variant="ghost" 
                  className="flex items-center gap-2 px-6 h-14 rounded-none border-r border-border hover:bg-secondary"
                >
                  <Icon name="Menu" size={20} />
                  <span className="font-medium">Каталог</span>
                </Button>
                
                <Input
                  type="text"
                  placeholder="Поиск мебели..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 h-14 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 px-6 text-base"
                />
                
                <Button 
                  className="h-14 px-8 rounded-none bg-primary hover:bg-primary/90"
                >
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 text-center">Популярные товары</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card 
                key={product.id} 
                className="group overflow-hidden border border-border hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-primary">
                      {product.price}
                    </p>
                    <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      В корзину
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Интернет-магазин мебели. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import Image from 'next/image';

export default function CategoryFilter() {
  const categories = [
    { name: 'Beach', icon: '🏖️' },
    { name: 'Countryside', icon: '🏞️' },
    { name: 'Mountains', icon: '⛰️' },
    { name: 'City', icon: '🏙️' },
    { name: 'Cabins', icon: '🏡' },
    { name: 'Mansions', icon: '🏰' },
    { name: 'Lakefront', icon: '🌊' },
    { name: 'Skiing', icon: '⛷️' },
    { name: 'Camping', icon: '🏕️' },
    { name: 'Tropical', icon: '🌴' },
    { name: 'Islands', icon: '🏝️' },
    { name: 'Boats', icon: '⛵' },
  ];

  return (
    <div className="pt-6 pb-6">
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide p-3 -ml-3">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center space-y-2 cursor-pointer hover:text-[#FF385C] transition transform duration-100 ease-out">
            <div className="text-2xl">{category.icon}</div>
            <p className="text-xs font-medium">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
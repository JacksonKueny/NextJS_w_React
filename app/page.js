// app/page.js
import Counter from './components/Counter';
import ProjectInfo from './components/ProjectInfo';
import ProductSearch from './components/ProductSearch';

export default function Home() {
  return (
      <div style={{ padding: '20px' }}>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <Counter increment={1} backgroundColor="lightblue" />
          <Counter increment={2} backgroundColor="lightcoral" />
        </div>
        <ProjectInfo />
        <ProductSearch />
      </div>
  );
}

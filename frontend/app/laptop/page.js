import '../globals.css';

async function getLaptops() {
  const res = await fetch('http://localhost:8000/api/laptops/', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch laptops');
  }

  return res.json();
}

export default async function Page() {
  const laptops = await getLaptops();

  return (
    <main className="container">
      <h1>Laptops</h1>

      <div className="controls">
        <div className="search">
          <input type="text" placeholder="Search Laptops" />
        </div>
      </div>

      <div className="table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Model</th>
              <th>Processor</th>
              <th>RAM</th>
              <th>Storage</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {laptops.map((item, index) => (
              <tr key={index}>
                <td>{item.model}</td>
                <td>{item.processor}</td>
                <td>{item.ram}</td>
                <td>{item.storage}</td>
                <td>{item.price}</td>
                <td>
                  <img
                    src={item.image_url}
                    alt={item.model}
                    style={{ height: '30px' }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
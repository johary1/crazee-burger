// eslint-disable-next-line react/prop-types
export default function EmptyMenuAdmin({ onReset }) {
  return (
    <div>
      <span>Aucun produit dans le menu</span>
      <button onClick={onReset}>recharger le menu</button>
    </div>
  );
}

// Menu estruturado para dropdown
const menuItems = [
  { label: 'Liquida' },
  {
    label: 'Sapatos',
    children: [
      { label: 'Scarpins' },
      { label: 'Mocassim' },
      { label: 'Sapatilhas' },
      { label: 'Moles' },
      { label: 'Peep Toe' },
      { label: 'Oxford' },
    ],
  },
  { label: 'Sandálias' },
  { label: 'Botas' },
  { label: 'Tênis' },
  { label: 'Outlet', color: "red" },
];

export default menuItems;
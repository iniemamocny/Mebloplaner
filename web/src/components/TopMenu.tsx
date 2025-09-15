import './TopMenu.css'

const tabs = [
  { id: 'szafki', label: 'Szafki' },
  { id: 'pomieszczenie', label: 'Pomieszczenie' },
  { id: 'koszt', label: 'Koszt' },
  { id: 'formatki', label: 'Formatki' },
]

interface TopMenuProps {
  activeTab: string
  setActiveTab: (id: string) => void
}

export default function TopMenu({ activeTab, setActiveTab }: TopMenuProps) {
  return (
    <nav className="top-menu">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`menu-button ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => {
            setActiveTab(tab.id)
          }}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}

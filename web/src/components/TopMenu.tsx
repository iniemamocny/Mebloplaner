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
        <a
          key={tab.id}
          href="#"
          className={`menu-link ${activeTab === tab.id ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault()
            setActiveTab(tab.id)
          }}
        >
          {tab.label}
        </a>
      ))}
    </nav>
  )
}

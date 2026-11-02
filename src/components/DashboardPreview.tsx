import { Icon } from './Design'

/**
 * DashboardPreview — The interactive dashboard mockup section.
 * Shows a browser chrome with sidebar navigation, KPI cards,
 * chart bars, and floating toast/chat overlays.
 * Matches the .dash, .dw, .dbody structure from the original design.
 */
export default function DashboardPreview() {
  return (
    <section className="dash rv" aria-label="Product dashboard preview">
      <div className="dw">
        <div className="dtop">
          <i /><i /><i />
          <span>app.youragency.com</span>
        </div>
        <div className="dbody">
          <aside className="dside">
            <b>Dashboard</b>
            <u className="dp" />
            <a className="on">Overview</a>
            <a>Customers</a>
            <a>AI Assistant</a>
            <a>Billing</a>
          </aside>
          <div className="dmain">
            <div className="kp">
              <div><small>Active users</small><b>12,480</b></div>
              <div><small>Monthly revenue</small><b>$48.2k</b></div>
              <div><small>AI replies</small><b>3,920</b></div>
            </div>
            <div className="chart">
              <small>Weekly growth</small>
              <div className="cbars">
                <u style={{ height: '34%' }} />
                <u style={{ height: '52%' }} />
                <u style={{ height: '42%' }} />
                <u style={{ height: '68%' }} />
                <u style={{ height: '58%' }} />
                <u style={{ height: '80%' }} />
                <u style={{ height: '95%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating "Deployed to production" toast */}
      <div className="fl dtoast rv">
        <i><Icon name="check" /></i>
        <span>Deployed to production<small>All checks passed</small></span>
      </div>

      {/* Floating AI chat overlay */}
      <div className="fl dchat rv">
        <div className="dch">
          <i><Icon name="bot" /></i>AI Assistant<u />
        </div>
        <p className="u">How did signups go last week?</p>
        <p className="t">•••</p>
        <p className="r">Signups are up 18%, and most came from the pricing page.</p>
      </div>
    </section>
  )
}

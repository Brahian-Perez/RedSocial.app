import MyGroup from '../componentes/group/MyGroup'
import RecomendedGroup from '../componentes/group/RecomendedGroup'
import GroupSearch from '../componentes/group/GroupSearch'

function GroupPage() {
  return (
    <>
      <div className="w3-container w3-content" style={{ maxWidth: '1200px', marginTop: '80px' }}>
        <div className="w3-row-padding">
          <div className="w3-col m6">
            <MyGroup />
          </div>
          <div className="w3-col m6">
            <RecomendedGroup />
            <br />
            <GroupSearch />
          </div>
        </div>
      </div>
      <br />
    </>
  )
}

export default GroupPage

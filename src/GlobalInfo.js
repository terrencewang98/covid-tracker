import React, {Component} from 'react'

class GlobalInfo extends Component{
	
	render(){
		return (
			<div>
				<div className = "cardColumn">
					{Object.entries(this.props.totalData).map(([k, v]) => (
						<div className = "card">
							<p>Total {k}</p>
							<p>{v.toLocaleString()}</p>
						</div>
					))}
				</div>
				<div className = "cardColumn">
					{Object.entries(this.props.todayData).map(([k, v]) => (
						<div className = "card">
							<p>{k} Today</p>
							<p>{v.toLocaleString()}</p>
						</div>
					))}
				</div>
				<div className = "cardRow">
					{Object.entries(this.props.countryData).map(([k, v]) => (
						<div className = "card">
							<p>{k}</p>
							<p>{v.toLocaleString()}</p>
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default GlobalInfo
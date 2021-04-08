import React, {Component} from 'react'
import {FormControl, Select, MenuItem} from '@material-ui/core'
import globalIcon from './images/globalIcon.png'
import GlobalInfo from './GlobalInfo.js'
{/*to implement: 
last updated
refresh button
flag
today cases
testing
individual us data
*/}

const api = "https://disease.sh/v3/covid-19"
const countryDefault = {name: "Worldwide", nickname: "WW", flag: globalIcon}


class GlobalTracker extends Component{
	state = {
		country: countryDefault,
		countries: [],
		updated: "",
		totalData: {},
		todayData: {},
		countryData: {},
	}

	componentDidMount(){
	    this.fetchCountries()
	    this.fetchCountryData()
	}

	async fetchCountries(){
		try {
			const response = await fetch(`${api}/countries`)
			const json = await response.json()
			const data = json.map(entry => ({name: entry.country, nickname: entry.countryInfo.iso2, flag: entry.countryInfo.flag}))
			this.setState({countries: data})
	    }
	    catch (error) {
	      console.log(error)
	    }
	}

	async fetchCountryData(){
		console.log(this.state.country.nickname)
		const url = this.state.country.name == "Worldwide" ? `${api}/all` : `${api}/countries/${this.state.country.name}`
		try{
			const response = await fetch(url)
			const json = await response.json()
			this.setState({
				updated: json.updated,
				totalData: {
					Cases: json.cases,
					Deaths: json.deaths,
					Recovered: json.recovered,
				},
				todayData: {
					Cases: json.todayCases,
					Deaths: json.todayDeaths,
					Recovered: json.todayRecovered,
				},
				countryData: {
					Active: json.active,
					"Tests Per One Million": json.testsPerOneMillion,
					Population: json.population,
				},
			})
		}
		catch (error) {
			console.log(error)
		}
	}

	onChangeCountry(event){
		this.setState({country : event.target.value}, this.fetchCountryData)
	}

	render() {

		return (
			<div className = "globalTracker">
				<div className = "infoBox">
					<div className = "infoHeader">
						<img src = {this.state.country.flag} style = {{maxHeight: "100%", marginLeft: "2%"}}/>
						<Select className = "selectionBox" onChange = {this.onChangeCountry.bind(this)} value = {this.state.country} variant = "outlined" style = {{fontFamily: "Merriweather, serif", 	fontSize: "2rem"}}>
							<MenuItem key = {countryDefault.nickname} value = {countryDefault}>
								{countryDefault.name}
							</MenuItem>
							{this.state.countries.map((country) => (
								<MenuItem key = {country.nickname} value = {country}>
									{country.name}
								</MenuItem>
							))}
						</Select>
						<div style = {{textAlign: "right", marginRight: "1%"}}>
							<p>Last Updated:</p>
							<p>{new Date(this.state.updated).toDateString()}</p>
							<p>{new Date(this.state.updated).toLocaleTimeString()}</p>
						</div>
					</div>
					<GlobalInfo totalData = {this.state.totalData} todayData = {this.state.todayData} countryData = {this.state.countryData} />
				</div>
			</div>
		)
	}
}

export default GlobalTracker

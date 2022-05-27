/* eslint-disable */
import React from 'react'
import image from './logo.png'


function TopNav(props) {
	const userid = localStorage.getItem('userid')

	const { user, role } = props
	const logout = () => {
		localStorage.removeItem('user')
		localStorage.removeItem('role')
		window.location.reload();
	}
	const selectTodo = async (userid) => {
		await axios.post(`http://localhost:5000/api/v1/auth/sessionout/`, {userid })

	}

	return (

		<div>
			<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
				<img src={image} height="90px" widht="30px" />
				<a className="navbar-brand" href="/Home"><span>FCAP</span> </a>

				<div className="container">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="fa fa-bars"></span> Menu
					</button>
					<div className="collapse navbar-collapse" id="ftco-nav">
						<ul className="navbar-nav ml-auto">
							{user ? <>

								<li className="nav-item" style={{ marginright: "15px", marginleft: "15px", }}><a href="/Home" className="nav-link">Home</a></li>
								<li className="nav-item" style={{ marginright: "15px", marginleft: "15px", }}><a href="/Notes" className="nav-link">Notes</a></li>
								<li className="nav-item" style={{ marginright: "15px", marginleft: "15px", }}><a href="/Todo" className="nav-link">Todo</a></li>



							</> : null}
							{user && role == "ADMIN" ?
								<>
									<li className="nav-item" style={{ marginright: "15px", marginleft: "15px", }} ><a href="/DashboardAdmin" className="nav-link">Dashboard</a></li>
									<li className="nav-item" style={{ marginright: "15px", marginleft: "15px", }}><a href="/History" className="nav-link">History</a></li>
									<li className="nav-item" style={{ marginright: "15px", marginleft: "15px", }}><a href="/TaskDetails" className="nav-link">Task</a></li>
									<li className="nav-item" style={{ marginright: "15px", marginleft: "15px", }}><a href="/EmployeeDetails" className="nav-link">Employee</a></li>
									<li className="nav-item" style={{ marginright: "15px", marginleft: "15px", }}><a href="/idea" className="nav-link">Idea</a></li>
									<li className="nav-item" style={{ marginright: "15px", marginleft: "15px", }}><a href="/employeeArchive" className="nav-link">employeeArchive</a></li>
									<li className="nav-item" style={{ marginright: "15px", marginleft: "15px", }}><a href="/Taskarchive" className="nav-link">Taskarchive</a></li>
								</>
								: null
							}
							{user && role == "CUSTOMER_SERVISES" ?
								<>
									<li className="nav-item"><a href="/DashboardCs" className="nav-link">Dashboard</a></li>
									<li className="nav-item"><a href="/MessageTemplate" className="nav-link">MessageTemplate</a></li>
								</>
								:
								null}
							{user && role == "ACCOUNTING" ?
								<>
									<li className="nav-item"><a href="/DashboardAc" className="nav-link">Dashboard</a></li>
									<li className="nav-item"><a href="/Facture" className="nav-link">Facture</a></li>
									<li className="nav-item"><a href="/Stock" className="nav-link">Stock</a></li>
								</>
								: null}

							{user && role == "INFORMATION_TECHNOLOGIES" ?

								<li className="nav-item"><a href="/DashboardIt" className="nav-link">Dashboard</a></li>
								: null}
							{user && role == "MARKETING" ?
								<li className="nav-item"><a href="/DashboardMkt" className="nav-link">Dashboard</a></li>
								: null}
							{user && role == "TECHNICHAL_SERVICES" ?

								<li className="nav-item"><a href="/DashboardTech" className="nav-link">Dashboard</a></li>
								: null} </ul>
						{user ?

							<a href="/" ><button className="logoutbtn" id="button-5" onClick={logout} style={{ marginLeft: "100px" }}><div id="translate"></div><span className='log'>Logout </span></button></a>
							:
							<a href='/login'><button className="logoutbtn" id="button-5" style={{ marginLeft: "100px" }}><div id="translate"></div><span className='log' >Login </span></button></a>

						}


					</div>
				</div></nav>    <section className="hero-wrap hero-wrap-2"  >
				<div className="overlay"></div>
			</section>

		</div>
	)
}

export default TopNav;
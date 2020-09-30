import React, {Component} from 'react';
// import YoutubeComponent from '../../component/YoutubeComponent/YoutubeComponent';
// import Product from '../Product/Product';
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost';

class Home extends Component {
	state = {
		showComponent: true
	}

	componentDidMount(){
		// setTimeout(() => {
		//	this.setState({
		//		showComponent: false
		//	})	
		// }, 15000)
	}

		render(){
			return (
			<div>
				{/* <p>YoutubeComponent </p>
				<hr/>
				<YoutubeComponent time="7.12" title="Tutorial React JS - Bagian 1" desc="2000x di tonton - 2 hari yang lalu"/>
				<YoutubeComponent time="7.13" title="Tutorial React JS - Bagian 2" desc="6.000.000 di tonton - 1 hari yang lalu"/>
				<YoutubeComponent time="7.14" title="Tutorial React JS - Bagian 3" desc="400x di tonton - 5 hari yang lalu"/>
				<YoutubeComponent time="7.15" title="Tutorial React JS - Bagian 4" desc="2.666.444x di tonton - 3 hari yang lalu"/>
				<YoutubeComponent /> */}
				{/* <p>Counter</p>
				<hr/>
				<Product /> */}

				{/* <p>LifeCycle Component</p>
				<hr/>
				{
					this.state.showComponent
					?
					<LifeCycleComp/>
					: null
				} */}

				<p>Blog Post</p>
				<hr/>
				<BlogPost/>
			</div>
			)
		}
}

export default Home;
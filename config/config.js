	
export default {
	singular: true,
	plugins: [
    ['umi-plugin-react', {
    		antd: true,
    		dva: true
    }],
  ],
	routes: [
	{
	    path: '/',
	    component: '../layout/BasicLayout.js',
	    routes: [
	       {
	        path: '/',
	        component: './Hello.js'
	       },
	       {
	        path: '/hello',
	        component: 'Hello.js'
	        },
	  		{
	        path: '/word',
	        component: 'Word.js'
	        }
	    ]
  	}
  ],
};

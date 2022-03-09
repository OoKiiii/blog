import { createGlobalStyle } from 'styled-components';

const NavigationStyle = createGlobalStyle`
	.navigation-box {
		position: fixed;
	    top: 0;
	    left: 0;
	    width: 100%;
	    max-width: 7rem;
	    height: 100vh;
	    padding: 2rem 0;
	    background-color: #ffffff;
	    border-right: 0.1rem solid #eeeeee;
	    overflow: hidden;
	    ul {
	        width: 100%;
	        margin: 0 auto;
	        li {
	            width: 4rem;
	            height: 4rem;
	            margin: 3rem auto;
	            padding: 0.5rem;
	            border-radius: 0.5rem;
	            transition: all 0.5s;
	            cursor: pointer;
	            &:hover {
	                &:nth-child(1) {
	                    img {
	                        transform: rotate(270deg);
	                        transition: all 0.5s;
	                    }
	                }
	                &:nth-child(2) {
	                    img {
	                        transform: rotate(270deg);
	                        transition: all 0.5s;
	                    }
	                }
	                &:nth-child(3) {
	                    img {
	                        transform: scale(1.2);
	                        transition: all 0.5s;
	                    }
	                }
	            }
	            &:nth-child(1) {
	                background-color: #b9caff;
	            }
	            &:nth-child(2) {
	                background-color: #f6daff;
	            }
	            &:nth-child(3) {
	                background-color: #d5fffc;
	            }
	            img {
	                margin: 0 auto;
	            }
	        }
	    }
    }
`;

export default NavigationStyle;

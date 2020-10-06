import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {renderEntireThree} from "./render";
import state from "./redux/state";



renderEntireThree(state);
serviceWorker.unregister();

import express from 'express';
import { createServer } from 'http';
import Loadable from 'react-loadable';
import config from '../../config';
import loggerFactory from '../../logger/factory';
import app from './app';
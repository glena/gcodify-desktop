import { build as saveBuilder } from './save';
import { build as loadBuilder } from './load';
import { build as reloadBuilder } from './reload';

export default function getBuilder(type) { 
  switch (type) {
  case 'SAVE': return saveBuilder;
  case 'LOAD': return loadBuilder;
  case 'RELOAD': return reloadBuilder;
  }
}
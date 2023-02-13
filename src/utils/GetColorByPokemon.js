import { POKEMON_TYPE_COLORS } from './constant';

const GetColorByPokemon = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()]

export default GetColorByPokemon;
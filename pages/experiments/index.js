import AllExperiments from '../../src/components/experiments/experiments-page'
const index= ({data}) => {
    return <AllExperiments data={data} />
}
export default index;

export async function getStaticProps() {
    const {experiments_categories  } = await import('/data/data.json');
    return {
        props:{
            data: experiments_categories,
        }
    }
}
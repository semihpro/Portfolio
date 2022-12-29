// import Experiment from '../../../src/components/experiments/experiment';

const ExperimentPage = () => <h1>Experiments page</h1>
//<Experiment data={data} pageName={pageName} />;

export default ExperimentPage;

/*export async function getStaticPaths() {
  const { experiments_categories } = await import('/data/data.json');
  const allPaths = experiments_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context?.params.cat;
  const { allEvents } = await import('/data/data.json');

  const data = allEvents.filter((ev) => ev.city === id);

  return { props: { data, pageName: id } };
}*/

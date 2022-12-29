import SingleExperiment from '../../../src/components/experiments/single-experiment';

const ExperimentPage = ({ data }) => <SingleExperiment data={data} />;

export default ExperimentPage;

export async function getStaticPaths() {
  const data = await import('/data/data.json');
  const allExperiments = data.allExperiments;

  const allPaths = allExperiments.map((path) => {
    return {
      params: {
        cat: path["category-title"],
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context.params.id;
  const { allExperiments } = await import('/data/data.json');
  const experimentData = allExperiments.find((ev) => id === ev.id);

  return {
    props: { data: experimentData },
  };
}

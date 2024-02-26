import SimpleQuestion from "../../SimpleQuestion";

const CrawlSpace = (props) => {
    const {crawlspace, setCrawlspace} = props;

    return (
        <SimpleQuestion 
            question="Does your home have a crawl space under the first floor?" 
            options={['Yes', 'No', 'Not Sure']} 
            answer={crawlspace}
            setAnswer={setCrawlspace} 
        />
    );
}

export default CrawlSpace;
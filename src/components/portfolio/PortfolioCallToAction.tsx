
import { Button } from "@/components/ui/button";

const PortfolioCallToAction = () => {
  return (
    <section className="py-16 bg-mtechGray-50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl">
        <div className="bg-mtechBlue-800 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-mtechGray-100 mb-6 max-w-xl mx-auto">
            Let's discuss your project requirements and how our web development and software testing expertise can help bring your vision to life.
          </p>
          <Button className="bg-white text-mtechBlue-800 hover:bg-mtechGray-100" asChild>
            <a href="/quote">Get a Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCallToAction;

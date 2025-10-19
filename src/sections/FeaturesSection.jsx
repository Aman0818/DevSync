import SectionTitle from "../components/SectionTitle";

export default function FeaturesSection() {
    return (
        <>
            <SectionTitle text1="Features" text2="Features Overview" text3="A visual collection of our most recent works - each piece crafted with intention, emotion and style." />

            <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl" src="https://images.pexels.com/photos/5717797/pexels-photo-5717797.jpeg" alt="Code Review Dashboard" height={400} width={400} />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Code Review Dashboard</h3>
                    <p className="text-sm text-slate-600 mt-1">Review and track pull requests in real time.</p>
                </div>
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl" src="https://images.pexels.com/photos/8853396/pexels-photo-8853396.jpeg" alt="Team Management" height={400} width={400} />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Team Management</h3>
                    <p className="text-sm text-slate-600 mt-1">Assign roles, tasks, and permissions effortlessly.</p>
                </div>
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl" src="https://images.pexels.com/photos/6914634/pexels-photo-6914634.jpeg" alt="Project Analytics" height={400} width={400} />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Project Analytics</h3>
                    <p className="text-sm text-slate-600 mt-1">Visualise commits, issues, and progress in one view.</p>
                </div>
            </div>
        </>
    );
}
import React from 'react'

const Skill = ({text}) => {
	// "bg-slate-400/60 backdrop-blur-lg backdrop-filter rounded-md p-1 px-2 shadow-lg tracking-wider border-2 border-slate-200 text-slate-100 font-semibold"

	return (
		<div className="bg-slate-400/50 backdrop-blur-lg backdrop-filter rounded-full p-1 px-4 shadow-md tracking-wider  text-slate-100">{text}</div>
	)
}

export default Skill
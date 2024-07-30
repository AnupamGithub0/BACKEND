import { Tournament } from "../Models/CreateTournament.js"

export const loadMore = async (req,res)=>{
    try {
        const page = req.params.page
        const perPgae = 3
        const tournaments = await Tournament.find().skip((page-1)*perPgae).limit(perPgae).sort({createdAt:-1})

        return res.json({
            success:true,
            message:"Perpage set",
            data:tournaments
        })
        
    } catch (error) {
        return res.json({
            success:false,
            message:"Error while loadmore"
        })
        
    }
}
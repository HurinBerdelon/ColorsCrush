import { NextApiRequest, NextApiResponse } from "next";
import { query as q } from 'faunadb'
import { fauna } from "../../services/fauna";
import { GameSchema } from "../../schema/game";
import { scoreTableLenght } from "../../config";

interface FaunaQuery {
    after: []
    data: []
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
    if (request.method === 'POST') {

        const data: GameSchema = request.body

        await fauna.query(
            q.Let({
                match: q.Match(
                    q.Index('game_by_id'),
                    data.id
                ),
                data: data
            },
                q.If(
                    q.Exists(
                        q.Var('match')),
                    q.Update(
                        q.Select('ref', q.Get(q.Var('match'))), { data: data }
                    ),
                    q.Create(
                        q.Collection('games'),
                        { data: data }
                    )
                )
            )
        )
        response.json({ received: true })
    }

    if (request.method === 'GET') {

        const { data } = await fauna.query<FaunaQuery>(
            q.Paginate(
                q.Match(
                    q.Index('sort_by_score')
                ),
                { size: scoreTableLenght }
            ),
        )
        response.json({ games: data })
    }
}